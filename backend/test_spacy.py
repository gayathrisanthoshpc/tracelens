import spacy

nlp = spacy.load("en_core_web_sm")

text = "Rahul contacted Arjun at 10:30. Priya sent a document."

doc = nlp(text)

for ent in doc.ents:
    print(ent.text, ent.label_)