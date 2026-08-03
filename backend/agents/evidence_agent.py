def read_evidence(file_path):
    with open(file_path, "r") as file:
        content = file.read()

    return content


if __name__ == "__main__":
    evidence = read_evidence("data/case_001/chat.txt")

    print("Evidence Found:")
    print(evidence)