import pandas as pd
df = pd.read_csv (r'/Users/Andy/Downloads/RegManagementDetails.csv')
df.to_json (r'./test.json',orient='records')