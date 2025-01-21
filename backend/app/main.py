from fastapi import FastAPI, Form
from app.gpt_service import call_custom_gpt_for_xml
from app.download_service import download_xml_file

app = FastAPI()

@app.post("/generate_and_download_xml/")
async def generate_and_download_xml(test_cases: str = Form(...)):
    """Call GPT, extract XML file URL, and download the file"""
    file_url = call_custom_gpt_for_xml(test_cases)

    if file_url:
        xml_path = download_xml_file(file_url)
        if xml_path:
            return {"message": "XML file downloaded successfully", "file_path": xml_path, "download_url": file_url}
        else:
            return {"error": "Failed to download XML file"}
    else:
        return {"error": "No XML file link found in GPT response"}

@app.get("/")
async def read_root():
    return {"message": "Welcome to the TestNG XML Generator API!"}