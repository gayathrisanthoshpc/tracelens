import json


def save_memory(case_data, file_path="memory/case_memory.json"):

    with open(file_path, "r") as file:
        memory = json.load(file)

    memory["cases"].append(case_data)

    with open(file_path, "w") as file:
        json.dump(memory, file, indent=4)


def get_memory(file_path="memory/case_memory.json"):

    with open(file_path, "r") as file:
        memory = json.load(file)

    return memory["cases"]