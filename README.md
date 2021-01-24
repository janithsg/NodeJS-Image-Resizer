# NodeJS Image Resizer

This service is used to resize and optimize the images by URL.
Its very simple and since its developed with [Sharp](https://www.npmjs.com/package/sharp), its performance is also good.

Got the initial plan from this [git repo](https://github.com/AggrandizeIO/expressjs-sharp)

Example Request:
```sh
http://yourhost.com/api/resize?w=300&h=200&q=80&img=https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg
```

Use the params as follows
  - w = width
  - h = height
  - q = quality
  - img = URL of the image that you need to resize

# License
MIT
