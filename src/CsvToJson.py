import pandas as pd
import os

df = pd.read_csv (r'/Users/Andy/Downloads/RegManagementDetails.csv')

#keeps=["FFA Number","Club Name","Firstname","Lastname","DOB","Product Name","Reg Status Secondary"]
keeps=["FFA Number","Firstname","Lastname","DOB","Product Name","Reg Status Secondary"]

df=df[keeps]

df["Team Name"] = df["Product Name"]

df.index=df["FFA Number"]
df["name"]=df["Firstname"] + ' ' + df["Lastname"]
df["name"] = df["name"].str.title()
df["shirtno"] = ''
del df['Firstname']
del df['Lastname']
df = df.replace({'Pulteney Old Scholars': 'Pulteney',
 'Plymptonians Old Boys': 'Old Plymptonians',
 'Mercedes Old Boys':'Mercedes',
 'Cove FC Masters Player Registration': 'Cove FC',
 #'Cove Fusion': 'Cove FC',
 #'Southern Cross Masters': 'Southern Cross',
 #'Southern Sharks Masters':'Southern Sharks',
 #'Croatia Masters': 'Croatia',
 #'Sporting Masters': 'Sporting',
 #'Sturt-Marion (Masters)': 'Sturt Marion Thunder',
 #'Sturt-Marion B (Masters)': 'Sturt Marion Old Boys',
 'Royal Ajvar Sports & Social Club': 'Royal Ajvar',
 'Austria Masters': 'Austria',
 'Adelaide Spurs Masters': 'Adelaide Spurs',
 'St Peters Old Collegians':'St Peters',
 'University Old Boys Masters': 'University Old Boys',
 'West Beach Legends': 'West Beach'})

df = df.replace({'Product Name': r'.*FULL.*'},{'Product Name': 'Full'}, regex=True)
df = df.replace({'Product Name': r'.*Adelaide Spurs Player Registration.*'},{'Product Name': 'Full'}, regex=True)

#df = df.replace({'Product Name': r'.*Austria Registration -already registered elsewhere.*'},{'Product Name': 'Shared'}, regex=True)
#df = df.replace({'Product Name': r'.*West Beach Div 1 Already CSL/SAASL Registered.*'},{'Product Name': 'Shared'}, regex=True)
#df = df.replace({'Product Name': r'.*West Beach Legends Already CSL/SAASL Registered.*'},{'Product Name': 'Shared'}, regex=True)
# df = df.replace({'Product Name': r'.*Sturt Marion Thunder (Div1) Already Registered.*'},{'Product Name': 'Shared'}, regex=True)
# df = df.replace({'Product Name': r'.*Sturt-Marion Old Boys (Div3) Already Registered.*'},{'Product Name': 'Shared'}, regex=True)
# df = df.replace({'Product Name': r'.*Sturt-Marion Old Boys (Div 3) Player Rego.*'},{'Product Name': 'Full'}, regex=True)
# df = df.replace({'Product Name': r'.*West Beach (Div 1) Player Registration.*'},{'Product Name': 'Full'}, regex=True)
# df = df.replace({'Product Name': r'.*University Orange (Div 2) Player Registration.*'},{'Product Name': 'Full'}, regex=True)
# df = df.replace({'Product Name': r'.*Old Plymptonians (Div 3) SHARED Player Rego.*'},{'Product Name': 'Shared'}, regex=True)
# df = df.replace({'Product Name': r'.*Plympton FC (Div 1) Player Rego.*'},{'Product Name': 'Full'}, regex=True)

df = df.replace({'Product Name': r'.*lready.*'},{'Product Name': 'Shared'}, regex=True)
df = df.replace({'Product Name': r'.*SHARED.*'},{'Product Name': 'Shared'}, regex=True)
df = df.replace({'Product Name': r'.*Player Reg.*'},{'Product Name': 'Full'}, regex=True)


df = df.replace({'Team Name': r'.*Adelaide Spurs.*'},{'Team Name': 'Adelaide Spurs'}, regex=True)
df = df.replace({'Team Name': r'.*Austria.*'},{'Team Name': 'Austria'}, regex=True)
df = df.replace({'Team Name': r'.*Cove.*'},{'Team Name': 'Cove Masters'}, regex=True)
df = df.replace({'Team Name': r'.*Croatia.*'},{'Team Name': 'Croatia'}, regex=True)
df = df.replace({'Team Name': r'.*Mercedes.*'},{'Team Name': 'Mercedes'}, regex=True)
df = df.replace({'Team Name': r'.*Plympton FC.*'},{'Team Name': 'Plympton FC'}, regex=True)
df = df.replace({'Team Name': r'.*Pulteney Crabs.*'},{'Team Name': 'Crabs'}, regex=True)
df = df.replace({'Team Name': r'.*Pulteney.*'},{'Team Name': 'Pulteney'}, regex=True)
df = df.replace({'Team Name': r'.*Crabs.*'},{'Team Name': 'Pulteney Crabs'}, regex=True)
df = df.replace({'Team Name': r'.*Royal Ajvar.*'},{'Team Name': 'Royal Ajvar'}, regex=True)
df = df.replace({'Team Name': r'.*Cross.*'},{'Team Name': 'Southern Cross'}, regex=True)
df = df.replace({'Team Name': r'.*Sharks.*'},{'Team Name': 'Southern Sharks'}, regex=True)
df = df.replace({'Team Name': r'.*Sporting.*'},{'Team Name': 'Sporting'}, regex=True)
df = df.replace({'Team Name': r'.*St Peter\'s.*'},{'Team Name': 'St Peters'}, regex=True)
df = df.replace({'Team Name': r'.*Fusion.*'},{'Team Name': 'Fusion'}, regex=True)
df = df.replace({'Team Name': r'.*Sturt Marion.*'},{'Team Name': 'Sturt Marion OB'}, regex=True)
df = df.replace({'Team Name': r'.*Fusion.*'},{'Team Name': 'Sturt Fusion'}, regex=True)
df = df.replace({'Team Name': r'.*Orange.*'},{'Team Name': 'University Orange'}, regex=True)
df = df.replace({'Team Name': r'.*Uni Old Boys.*'},{'Team Name': 'University Old Boys'}, regex=True)
df = df.replace({'Team Name': r'.*West Beach.*'},{'Team Name': 'West Beach'}, regex=True)
df = df.replace({'Team Name': r'.*Old Plympton.*'},{'Team Name': 'Old Plymptonians'}, regex=True)


#del df['Club Name']

df = df.rename(columns={"FFA Number": "id",
 "Team Name": "team",
 "DOB": "dateofbirth",
 "Product Name": "type",
 "Reg Status Secondary": "status"})

# Big St Peters 2022 fix

# df.loc[df['id'] == 10192438, 'team'] = 'St Peters B' #Angel Lopez
# df.loc[df['id'] == 10192353, 'team'] = 'St Peters B' #Katianos, John
# df.loc[df['id'] == 80860398, 'team'] = 'St Peters B' #Burley, Richard J
# df.loc[df['id'] == 79697306, 'team'] = 'St Peters B' #Mileto, Domenico
# df.loc[df['id'] == 11447695, 'team'] = 'St Peters B' #Martelotto, Luciano
# df.loc[df['id'] == 11450229, 'team'] = 'St Peters B' #Scholl, Ivan
# df.loc[df['id'] == 11276224, 'team'] = 'St Peters B' #Russell, Martin
# df.loc[df['id'] == 11449192, 'team'] = 'St Peters B' #Sikora, Grzegorz
# df.loc[df['id'] == 11450666, 'team'] = 'St Peters B' #Guzman, Jerson
# df.loc[df['id'] == 11470835, 'team'] = 'St Peters B' #Lugo, Alex

#To register - Edgar Costa
#To register - Oscar ??
#To register - Charlie Rodriguez


print(df.head(20))

df.to_json (r'./src/Players.json',orient='records',indent=2)

#os.remove('/Users/Andy/Downloads/RegManagementDetails.csv')
