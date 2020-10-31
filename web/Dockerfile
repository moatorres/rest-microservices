# # Start with fully-featured Node.js base image
# FROM node:14.15.0 AS build

# USER node
# WORKDIR /home/node/app

# # Copy dependency info and install
# COPY --chown=node:node package.json yarn.lock ./

# RUN yarn install --frozen-lockfile

# # Copy source code
# COPY --chown=node:node src ./src

# # Build
# # RUN yarn build

# # Run-time stage
# FROM node:14.5.0-alpine

# # Set user and expose port
# USER node
# EXPOSE 3000

# WORKDIR /home/node/app

# # Copy dependency info and install production-only depedenncies
# COPY --chown=node:node package.json yarn.lock ./
# RUN yarn install --fronzen-lockfile --production

# # Copy results from previous stage
# COPY --chown=node:node --from=build /home/node/app/src ./src

# CMD [ "node", "server.js" ]



FROM node:14-alpine

COPY . /src

WORKDIR /src

RUN npm install --production

EXPOSE 3000

CMD npm start