# ----------------------------------------------------------------------
# This file has been created and is maintained by ONLYTUNES.UK
#               _       _                                _
#              | |     | |                              | |
#    ___  _ __ | |_   _| |_ _   _ _ __   ___  ___  _   _| | __
#   / _ \| '_ \| | | | | __| | | | '_ \ / _ \/ __|| | | | |/ /
#  | (_) | | | | | |_| | |_| |_| | | | |  __/\__ \| |_| |   <
#   \___/|_| |_|_|\__, |\__|\__,_|_| |_|\___||___(_)__,_|_|\_\
#                  __/ |
#                 |___/
# https://onlytunes.uk
# ----------------------------------------------------------------------

FROM node:16-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 5000 on container
EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

# start the app
CMD [ "npm", "start" ]
