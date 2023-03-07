import os

def rename_files(path):
    for filename in os.listdir(path):
        parts = filename.split('.')
        new_name = f"{parts[0]}.{parts[1]}.mp4"
        os.rename(os.path.join(path, filename), os.path.join(path, new_name))

# Change the path to the folder that you want to rename files in
path = "filesToBeShortened"
rename_files(path)