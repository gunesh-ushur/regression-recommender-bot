import requests

def download_xml_file(file_url):
    """Downloads the XML file from the extracted URL"""
    response = requests.get(file_url)
    if response.status_code == 200:
        xml_path = "testng.xml"
        with open(xml_path, "wb") as file:
            file.write(response.content)
        return xml_path
    else:
        return None
