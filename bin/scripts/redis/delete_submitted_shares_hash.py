#this is the third  script to run, it works effectively and kills old shares


import redis
import datetime
import json
import time

now = time.time()
r = redis.StrictRedis(host='10.142.0.4')

key = "submitted_share"
for hkey in r.hkeys(key):
  row = json.loads(r.hget(key,hkey))
  seconds = now - row['time']
  hours = seconds / 60/60
  if hours > 12:
    r.hdel(key, hkey)
    #print key,hkey
