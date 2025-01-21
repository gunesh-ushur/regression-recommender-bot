import openai
import re

OPENAI_API_KEY = "your-openai-api-key"
CUSTOM_GPT_MODEL = "your-custom-gpt-name"

openai.api_key = OPENAI_API_KEY

def call_custom_gpt_for_xml(user_input):
    """Calls Custom GPT and extracts the file URL"""
    response = openai.ChatCompletion.create(
        model=CUSTOM_GPT_MODEL,
        messages=[
            {"role": "system", "content": "You generate TestNG XML and provide a downloadable link."},
            {"role": "user", "content": f"Generate a TestNG XML file for: {user_input} and provide a downloadable link."}
        ],
        temperature=0.5
    )

    gpt_output = response['choices'][0]['message']['content']

    # Extract XML file URL using regex
    match = re.search(r'https?://\S+\.xml', gpt_output)
    if match:
        return match.group(0)  # Return the extracted URL
    else:
        return None
