import requests
from bs4 import BeautifulSoup
import csv

response = requests.get("https://www.udg.edu.me/fakulteti")
return_matrix = []

soup = BeautifulSoup(response.text, 'html.parser')
a_tags = list(soup.find_all('a', href=True))

a_tags = [i for i in a_tags if 'fakulteti' in i['href'] and i['href'] != '/fakulteti/']

linkovi_do_sajtova = []
for i in a_tags:
    response = requests.get("https://www.udg.edu.me" + i['href'])
    soup = BeautifulSoup(response.text, 'html.parser')
    element = soup.find(class_='faculty-link')
    linkovi_do_sajtova.append(element['href'])

moguce_titule = ['Doc.', 'dr', 'mr', 'Prof.']

dict_fakulteta = {
    "https://fmefb.udg.edu.me/": "Fakultet za medjunarodnu ekonomiju finansije i biznis",
    "https://fkt.udg.edu.me/": "Fakultet za kulturu i turizam",
    "https://fist.udg.edu.me/": "Fakultet za informacione sisteme i tehnologije",
    "https://politehnika.udg.edu.me/": "Politehnika",
    "https://fpn.udg.edu.me/": "Fakultet pravnih nauka",
    "https://hs.udg.edu.me/": "Humanisticke studije",
    "https://fu.udg.edu.me": "Fakultet umjestnosti",
    "https://fptbhe.udg.edu.me/": "Fakultet za prehrambenu tehnologiju, bezbjednost hrane i ekologiju",
    "https://fsm.udg.edu.me/": "Fakultet za sportski menadžment",
    "https://fdm.udg.edu.me/": "Fakultet za dizajn i multimediju",
    "https://www.udg.edu.me/ff/": "Filoloski fakultet",
    "https://fprn.udg.edu.me/": "Fakultet primijejenih nauka"
}

for i in linkovi_do_sajtova[0:-1]:
    lista = [dict_fakulteta[i]]
    titule = []
    if not i.endswith('/'): i = i + "/"
    response = requests.get(str(i) + 'predavaci/')
    soup = BeautifulSoup(response.text, 'html.parser')
    element = soup.find_all(class_='teacher-name')
    for k in element:
        c = k.text.split()
        t = " ".join([e for e in c if e in moguce_titule])
        if not t: titule.append('undefined')
        else: titule.append(t)
    for j in set(titule):
        lista.append(j)
        lista.append(len([m for m in titule if m == j ]))
    return_matrix.append(lista)

with open('result.csv', mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerows(return_matrix)


