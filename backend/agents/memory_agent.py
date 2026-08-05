import json
import os



def save_memory(

    case_data,

    file_path="memory/case_memory.json"

):


    folder = os.path.dirname(
        file_path
    )


    if folder:

        os.makedirs(
            folder,
            exist_ok=True
        )



    if os.path.exists(file_path):


        with open(
            file_path,
            "r"
        ) as file:

            memory = json.load(file)


    else:


        memory = {

            "cases":[]

        }





    case_exists = False



    for index, case in enumerate(memory["cases"]):


        if case["case_id"] == case_data["case_id"]:


            memory["cases"][index] = case_data

            case_exists = True

            break





    if not case_exists:


        memory["cases"].append(
            case_data
        )





    with open(

        file_path,

        "w"

    ) as file:


        json.dump(

            memory,

            file,

            indent=4

        )





def get_memory(

    file_path="memory/case_memory.json"

):


    if not os.path.exists(file_path):

        return []



    with open(

        file_path,

        "r"

    ) as file:


        memory = json.load(file)



    return memory.get(

        "cases",

        []

    )