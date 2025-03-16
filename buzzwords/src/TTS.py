import os
import requests
from base64 import b64decode
import tempfile

class TTS:
    def __init__(self):
        self.token = os.environ.get("SPEECHIFY_API_KEY")
    
    def save_speech(self, text):
        headers = {
            'Authorization': 'Bearer ' + self.token,
            'Content-Type': 'application/json',
        }
        json_data = {
            'input': text,
            'voice_id': 'henry',
            'audio_format': 'mp3',
        }
        response = requests.post('https://api.sws.speechify.com/v1/audio/speech', headers=headers, json=json_data).json()
        mp3_bytes = b64decode(response["audio_data"])

        temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".mp3")
        temp_file.write(mp3_bytes)
        temp_file.close()
        
        return temp_file.name

# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{\n  "input": "input",\n  "voice_id": "voice_id"\n}'
#response = requests.post('https://api.sws.speechify.com/v1/audio/speech', headers=headers, data=data)