FROM node:22-alpine

#For Frontend 

WORKDIR /app/Frontend

COPY ./Frontend ./

RUN npm install  
RUN npm run build    


#For Backend    

WORKDIR /app/Backend     

COPY ./Backend ./   

RUN npm install  
EXPOSE 3044 

CMD ["node", "index.js"]     





