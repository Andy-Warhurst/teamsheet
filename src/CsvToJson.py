import pandas as pd
df = pd.read_csv (r'/Users/Andy/Downloads/RegManagementDetails(2).csv')

keeps=["FFA Number","Club Name","Firstname","Lastname","DOB","Product Name","Reg Status Secondary"]

df=df[keeps]

df.index=df["FFA Number"]
#del df["FFA Number"]
df["name"]=df["Firstname"] + ' ' + df["Lastname"]
df["shirtno"] = ''
del df['Firstname']
del df['Lastname']
#
# df = df[["id","name","team","dateofbirth","regotype", "shirtno"]]
#print(df)

df = df.replace({'Pulteney Old Scholars Masters': 'Pulteney',
 'Southern Cross Masters': 'Southern Cross',
 'Southern Sharks Masters':'Southern Sharks',
 'Croatia Masters': 'Croatia',
 'Sporting Masters': 'Sporting',
 'Sturt-Marion (Masters)': 'Sturt-Marion',
 'Sturt-Marion B (Masters)': 'Sturt-Marion B',
 'Royal Ajvar Sports & Social Club': 'Royal Ajvar',
 'Austria Masters': 'Austria',
 'Adelaide Spurs Masters': 'Adelaide Spurs',
 'Monarchs Masters': 'Monarchs',
 'St. Peter\'s Old Collegians (Masters)': 'St Peter\'s',
 'West Beach Football Club': 'West Beach',
 'West Beach Legends Masters': 'West Beach Legends'})

df = df.rename(columns={"FFA Number": "id", "Club Name": "team","DOB": "dateofbirth","Product Name": "type","Reg Status Secondary": "status"})

print(df)

df.to_json (r'./src/Players.json',orient='records')