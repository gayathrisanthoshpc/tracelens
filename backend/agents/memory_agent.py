import json
import os
from datetime import datetime



def load_memory(file_path):

    if not os.path.exists(file_path):

        return {
            "cases": []
        }


    try:

        with open(
            file_path,
            "r",
            encoding="utf-8"
        ) as file:

            data = json.load(file)


            if "cases" not in data:

                data["cases"] = []


            return data


    except json.JSONDecodeError:


        return {
            "cases": []
        }






def save_memory(
    case_data,
    file_path="memory/case_memory.json"
):


    folder = os.path.dirname(file_path)


    if folder:

        os.makedirs(
            folder,
            exist_ok=True
        )



    case_data["created_at"] = datetime.now().isoformat()



    memory = load_memory(
        file_path
    )



    updated = False



    for index, case in enumerate(memory["cases"]):


        if case.get("case_id") == case_data.get("case_id"):


            memory["cases"][index] = case_data

            updated = True

            break




    if not updated:

        memory["cases"].append(
            case_data
        )




    with open(
        file_path,
        "w",
        encoding="utf-8"
    ) as file:


        json.dump(
            memory,
            file,
            indent=4
        )






def get_memory(
    file_path="memory/case_memory.json"
):


    memory = load_memory(
        file_path
    )


    return memory.get(
        "cases",
        []
    )