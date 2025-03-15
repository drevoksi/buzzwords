import os
from openai import OpenAI
import pypdfium2 as pdfium

class BuzzStatement:
    def __init__(self):
        self.client = OpenAI(
            api_key = os.environ.get("OPENAI_API_KEY"),
            max_retries = 0
        )
    
    def response(self, prompt):
        completion = self.client.chat.completions.create(
            messages=[
                {"role": "user", "content": prompt,}
            ],
            model = "gpt-4o-mini",
        )
        answer = completion.choices[0].message.content
        return answer
    
    def get_pdf_text(self, file_path):
        pdf = pdfium.PdfDocument(file_path)
        text = ""
        for page in pdf:
            text += self.get_page_text(page) + " "
        return text
    
    def get_page_text(self, page):
        textpage = page.get_textpage()
        text_all = textpage.get_text_bounded()
        return text_all

    def get_buzz_statement(self, file_path):
        text_statement = self.get_pdf_text(file_path)
        prompt = """You are given a bank statement and asked to express it as suitable for a gen-z client.
                    TikTok, Instagram and other social networks are a massive part of their personality.
                    Hence, utilise your entire knowledge of recent phenomena such as memes in TikTok and Instagram reels.
                    Make it as saturated, engaging, and stimulating and dopamine-inducing as you possibly can.
                    However, ignore all sensitive information, and user details (they will be shown alongside the output).
                    Additionally, slang you may not know:
                    - Randomly use "uzz" in place of a word ending
                    - Randomly use any of skibidi, sigma, rizz, cap, it's giving, let them cook (they're doing great), who let them cook?, lowkey, lock in, bro is cooked
                    - "ts pmo" when something might piss one off
                    - Sometimes use "unc" when referring to a person
                    - Additionaly use long strings of emojis, specifically any of "💀☠️🌹🥀😭" and "🙏🙏🙏" when least appropriate (hard to explain when they are used!)
                    - Use "tuah" instead of words like "to" or "two" 
                    - "Low taper fade is massive", if any of that is messaged you could refer to "you know what else is low / massive?"
                    - "raise you ya ya ya" when appropriate
                    - All of the above is "brainrot"
                    Assume they are familiar with the memes and understand subtle references, do not specify 'instagram' or 'tiktok', do not be descriptive and mention memes as in casual conversation
                    The task is to describe the statement in a crazy way, do not print the table
                    Greatly overuse them and exaggerate, always state facts indirectly through memes

                    Do not output the table
                    Output format: {
                    Balance: [Sentence - two of description]
                    [Fun description of the statement about 10 sentences and points as appropriate]
                    }

                    Respond in maximum 5 words for now.
                    The bank statement is converted from their bank's PDF to text, and reads as following:
                """ + text_statement
        return "sample output"
        # return self.response(prompt)

# buzz = BuzzStatement()
# print(buzz.get_buzz_statement("example_statement.pdf"))