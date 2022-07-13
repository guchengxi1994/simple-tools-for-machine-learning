import xml.etree.ElementTree as ET

def xml2createML(xmlPath):
    """this function is used to convert xml files (labelimg) to createML files (json)"""
    obj = dict()
    tree = ET.parse(xmlPath)
    root = tree.getroot()
    filename = root.get(filename)
    
