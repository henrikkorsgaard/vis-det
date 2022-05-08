import csv

data_cleaned = {'kreds':[]}

with open('data/raw/ugyldige-stemmer-2019.csv',encoding='utf-16') as csv_file:
    csv_reader = csv.reader(csv_file , delimiter=",")
    for row in csv_reader:
        kreds = row[1]
        topic = row[0].lower()
        value = row[2]
        if topic not in data_cleaned:
            data_cleaned[topic] = []
        
        data_cleaned[topic].append(value)

        if kreds not in data_cleaned["kreds"]:
            data_cleaned["kreds"].append(kreds)


# Write it out and do quality checks
with open('data/clean/ugyldige-stemmer-2019.csv', 'w', newline='', encoding='utf-8') as csv_out:
    writer = csv.writer(csv_out, delimiter=',')
    header = []
    for key in data_cleaned:
        header.append(key)

    writer.writerow(header)
    index = 0
    for kreds in data_cleaned["kreds"]:
        line = []
        line.append(kreds)
        for topic in data_cleaned:
            if topic == "kreds":
                continue
            
            line.append(data_cleaned[topic][index])
        writer.writerow(line)
        index += 1


'''
import pandas as pd
import chardet

with open('data/raw/ugyldige-stemmer-2019.csv', 'rb') as f:
    result = chardet.detect(f.read())  # or readline if the file is large

df = pd.read_csv('data/raw/ugyldige-stemmer-2019.csv', encoding=result['encoding'])

data_cleaned = {'Kreds':[]}

for index, row in df.iterrows():
    print(row)

# need to get 
# valid votes, voters, invalid votes
# https://pbpython.com/pdvega.html
'''