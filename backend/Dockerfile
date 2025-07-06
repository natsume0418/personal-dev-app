# 1. ビルド用ステージ
FROM maven:3.9.6-eclipse-temurin-21 AS builder

WORKDIR /app

COPY .mvn/ .mvn/
COPY mvnw .
COPY pom.xml .
COPY src ./src

# mvnw に実行権限を付与
RUN chmod +x ./mvnw

RUN ./mvnw clean package -DskipTests

# 2. 実行ステージ
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=builder /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
