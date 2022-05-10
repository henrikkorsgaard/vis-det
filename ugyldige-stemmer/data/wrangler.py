from cmath import isnan
import csv
import pandas as pd
import math

# What is the target
# One file per area in granularity
## afstemningsområde
data_cleaned = {'kreds':[], 'id':[]}

df = pd.read_excel('data/raw/ugyldige-stemmer-2019-raw.xlsx')
df.to_csv("data/raw/ugyldige-stemmer-2019-raw.csv", index=False, encoding='utf-8-sig')

with open('data/raw/ugyldige-stemmer-2019-raw.csv',encoding='utf-8') as csv_file:
    csv_reader = csv.reader(csv_file , delimiter=",")

    column = ""
    column_data =[]
    index = 0
    for row in csv_reader:
        topic = row[1].lower()
        if topic != "":
            if index != 0:
                data_cleaned[column] = column_data

            column = topic
            column_data = []
        
        kreds = row[3].lower()
        kreds_id = row[2]
        if kreds not in data_cleaned['kreds']:
            data_cleaned['kreds'].append(kreds)

        if kreds_id not in data_cleaned['id']:
            data_cleaned['id'].append(kreds_id)

        value = row[4]
        if value == "..":
            value = ""
        column_data.append(value)
        index += 1

with open('data/clean/ugyldige-stemmer-2019.csv', 'w', newline='', encoding='utf-8') as csv_out:
    writer = csv.writer(csv_out, delimiter=',')
    header = []
    for key in data_cleaned:
        print(key)
        header.append(key)

    writer.writerow(header)
    
    index = 0
    for kreds in data_cleaned["kreds"]:
        line = []
        line.append(kreds)

        for topic in data_cleaned:
            if topic == "kreds":
                continue

            if topic == "id":
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