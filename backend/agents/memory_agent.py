import json


def save_memory(case_data, file_path="memory/case_memory.json"):

    with open(file_path, "r") as file:
        memory = json.load(file)

    memory["cases"].append(case_data)

    with open(file_path, "w") as file:
        json.dump(memory, file, indent=4)


if __name__ == "__main__":

    case = {
        "case_id": "case_001",
        "people": [
            "Rahul",
            "Arjun"
        ],
        "events": [
            "Rahul contacted Arjun",
            "Arjun sent a document",
            "Rahul confirmed payment"
        ]
    }

    save_memory(case)

    print("Memory saved successfully")