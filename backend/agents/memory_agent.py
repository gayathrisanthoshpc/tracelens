import json


def save_memory(case_data, file_path="memory/case_memory.json"):

    with open(file_path, "r") as file:
        memory = json.load(file)


    case_exists = False


    for index, case in enumerate(memory["cases"]):

        if case["case_id"] == case_data["case_id"]:

            memory["cases"][index] = case_data
            case_exists = True
            break


    if not case_exists:
        memory["cases"].append(case_data)


    with open(file_path, "w") as file:
        json.dump(memory, file, indent=4)



def get_memory(file_path="memory/case_memory.json"):

    with open(file_path, "r") as file:
        memory = json.load(file)

    return memory["cases"]