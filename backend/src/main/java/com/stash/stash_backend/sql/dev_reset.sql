-- Drop tables (for dev reset)
DROP TABLE IF EXISTS emergency_report;
DROP TABLE IF EXISTS user;

-- Recreate user table
CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Recreate emergency_report table
CREATE TABLE emergency_report (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50),
    description TEXT,
    city VARCHAR(100),
    zip_code VARCHAR(10),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id BIGINT,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(id)
);

-- sample users
INSERT INTO user (name, email, password) VALUES
('Alice Johnson', 'alice@example.com', 'testpass1'),
('Bob Smith', 'bob@example.com', 'testpass2');

-- sample reports
INSERT INTO emergency_report (type, description, city, zip_code, user_id) VALUES
('Fire', 'Fire near Oak Street', 'Seattle', '98071', 1),
('Water', 'Flooded basement', 'Renton', '98056', 2);