FROM openjdk:17
WORKDIR /bookjuk_backend
COPY . .
RUN chmod u+x mvnw
RUN ./mvnw clean package
RUN mv target/*.jar bookjuk_backend.jar
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it.sh
RUN chmod u+x /wait-for-it.sh
EXPOSE 8080
ENTRYPOINT ["/wait-for-it.sh", "db:3306", "--", "java", "-jar", "bookjuk_backend.jar"]