CREATE DATABASE IF NOT EXISTS carshop;
USE carshop;

CREATE TABLE IF NOT EXISTS Cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    price INT,
    year INT,
    description TEXT,
    image VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Dữ liệu mẫu (Dummy data)
INSERT INTO Cars (name, brand, price, year, description, image) VALUES 
('Tesla Model S', 'Tesla', 80000, 2024, 'Electric luxury sedan', 'https://via.placeholder.com/300x200?text=Tesla+Model+S'),
('Ford Mustang GT', 'Ford', 55000, 2023, 'American muscle car', 'https://via.placeholder.com/300x200?text=Ford+Mustang'),
('Mercedes C300', 'Mercedes', 45000, 2023, 'Luxury compact sedan', 'https://via.placeholder.com/300x200?text=Mercedes+C300');