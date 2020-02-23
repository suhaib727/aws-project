import matplotlib.pyplot as plt
import requests
import json

url = "https://bk19g0moec.execute-api.us-east-1.amazonaws.com/default/returnHotspots"
hotspots = requests.get(url = url) 
# print (type(hotspots.content.decode("utf-8")))

hotspots = hotspots.content.decode("utf-8")
hotspots = json.loads(hotspots)
fig = plt.figure()
ax = fig.add_subplot(111)
xPlots = []
yPlots = []
for f in hotspots:
    for d in f:
        # print ('-->',d['x']['N'])
        xPlots.append(d['x']['N'])
        yPlots.append(d['y']['N'])
ax.plot(xPlots, yPlots, color='lightblue', linewidth=3)
plt.show()



  
# extracting data in json format 
# data = r.json()
# print(data)