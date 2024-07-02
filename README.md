# 🗿 Docuception
###### The goatiest documentation of all time. 
---
## 📝 Write/Edit content
The core of docuception is located in the `content` directory.

## 📦 Build
```node
npx quartz build --serve --concurrency <num>
```
This will build your website as a static site under the public folder and the --serve option serve it to localhost:8080

## 🚀 Deploy
Docuception use Github Pages to host himself. The build action, *triggered automagically on any push*, is located at `.github/workflows`.