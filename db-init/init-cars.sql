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

-- Thêm 40 xe mẫu (Tên ảnh được đặt theo tên xe, thay khoảng trắng bằng dấu gạch ngang)
INSERT INTO Cars (name, brand, price, year, description, image) VALUES 
-- Luxury Sedans
('Mercedes S-Class 2024', 'Mercedes', 115000, 2024, 'The pinnacle of luxury sedans with advanced tech.', '/assets/Mercedes-S-Class-2024.jpg'),
('BMW 7 Series', 'BMW', 95000, 2024, 'Executive lounge experience on wheels.', '/assets/BMW-7-Series.jpg'),
('Audi A8 L', 'Audi', 90000, 2023, 'Understated luxury with Quattro performance.', '/assets/Audi-A8-L.jpg'),
('Lexus LS 500h', 'Lexus', 88000, 2023, 'Japanese craftsmanship meets hybrid efficiency.', '/assets/Lexus-LS-500h.jpg'),
('Bentley Flying Spur', 'Bentley', 210000, 2023, 'A perfect blend of performance and handcrafted luxury.', '/assets/Bentley-Flying-Spur.jpg'),
('Rolls-Royce Ghost', 'Rolls-Royce', 340000, 2024, 'The purest expression of Rolls-Royce.', '/assets/Rolls-Royce-Ghost.jpg'),
('Porsche Panamera', 'Porsche', 105000, 2024, 'A sports car for four.', '/assets/Porsche-Panamera.jpg'),
('Maserati Quattroporte', 'Maserati', 108000, 2023, 'Italian flair with a Ferrari-derived engine.', '/assets/Maserati-Quattroporte.jpg'),

-- Supercars & Sports
('Ferrari F8 Tributo', 'Ferrari', 280000, 2023, 'Homage to the most powerful V8 in Ferrari history.', '/assets/Ferrari-F8-Tributo.jpg'),
('Lamborghini Huracan EVO', 'Lamborghini', 260000, 2023, 'V10 naturally aspirated emotion.', '/assets/Lamborghini-Huracan-EVO.jpg'),
('McLaren 720S', 'McLaren', 305000, 2023, 'Lighter, stronger, faster.', '/assets/McLaren-720S.jpg'),
('Porsche 911 GT3 RS', 'Porsche', 225000, 2024, 'Born from the race track.', '/assets/Porsche-911-GT3-RS.jpg'),
('Aston Martin DBS', 'Aston Martin', 330000, 2024, 'The ultimate production Aston Martin.', '/assets/Aston-Martin-DBS.jpg'),
('Chevrolet Corvette Z06', 'Chevrolet', 105000, 2024, 'The American supercar killer.', '/assets/Chevrolet-Corvette-Z06.jpg'),
('Nissan GT-R Nismo', 'Nissan', 215000, 2023, 'The legendary Godzilla.', '/assets/Nissan-GT-R-Nismo.jpg'),
('Audi R8 V10', 'Audi', 160000, 2023, 'Everyday supercar performance.', '/assets/Audi-R8-V10.jpg'),

-- SUVs
('Lamborghini Urus', 'Lamborghini', 230000, 2023, 'The first Super Sport Utility Vehicle.', '/assets/Lamborghini-Urus.jpg'),
('Bentley Bentayga', 'Bentley', 195000, 2023, 'Go anywhere in supreme comfort.', '/assets/Bentley-Bentayga.jpg'),
('Rolls-Royce Cullinan', 'Rolls-Royce', 350000, 2024, 'Effortless everywhere.', '/assets/Rolls-Royce-Cullinan.jpg'),
('Range Rover SV', 'Land Rover', 180000, 2024, 'Modern luxury by design.', '/assets/Range-Rover-SV.jpg'),
('Mercedes G63 AMG', 'Mercedes', 179000, 2024, 'The iconic G-Wagon performance.', '/assets/Mercedes-G63-AMG.jpg'),
('BMW X7 M60i', 'BMW', 108000, 2024, 'The sovereign of the X range.', '/assets/BMW-X7-M60i.jpg'),
('Porsche Cayenne Turbo GT', 'Porsche', 190000, 2023, 'Physics-defying SUV performance.', '/assets/Porsche-Cayenne-Turbo-GT.jpg'),
('Cadillac Escalade V', 'Cadillac', 150000, 2023, 'Full-size American luxury with V-Series power.', '/assets/Cadillac-Escalade-V.jpg'),

-- Electric
('Tesla Model S Plaid', 'Tesla', 90000, 2024, 'Beyond Ludicrous. 0-60 in 1.99s.', '/assets/Tesla-Model-S-Plaid.jpg'),
('Lucid Air Sapphire', 'Lucid', 249000, 2024, 'The pinnacle of electric luxury performance.', '/assets/Lucid-Air-Sapphire.jpg'),
('Porsche Taycan Turbo S', 'Porsche', 185000, 2023, 'Soul, electrified.', '/assets/Porsche-Taycan-Turbo-S.jpg'),
('Audi e-tron GT RS', 'Audi', 145000, 2023, 'Electric performance art.', '/assets/Audi-e-tron-GT-RS.jpg'),
('Rimac Nevera', 'Rimac', 2200000, 2023, 'A new era of automotive performance.', '/assets/Rimac-Nevera.jpg'),
('Mercedes EQS 580', 'Mercedes', 125000, 2024, 'Progressive luxury for all senses.', '/assets/Mercedes-EQS-580.jpg'),
('BMW i7 xDrive60', 'BMW', 120000, 2024, 'The first-ever fully electric 7 Series.', '/assets/BMW-i7-xDrive60.jpg'),
('Rivian R1S', 'Rivian', 92000, 2023, 'Electric adventure vehicle.', '/assets/Rivian-R1S.jpg'),

-- Classics & Muscle
('Ford Mustang Shelby GT500', 'Ford', 80000, 2022, 'The most powerful street-legal Ford ever.', '/assets/Ford-Mustang-Shelby-GT500.jpg'),
('Dodge Challenger Hellcat', 'Dodge', 70000, 2023, 'Classic muscle with modern power.', '/assets/Dodge-Challenger-Hellcat.jpg'),
('Chevrolet Camaro ZL1', 'Chevrolet', 68000, 2023, 'Track-ready muscle.', '/assets/Chevrolet-Camaro-ZL1.jpg'),
('Toyota Supra GR', 'Toyota', 55000, 2023, 'The legend returns.', '/assets/Toyota-Supra-GR.jpg'),
('Mazda MX-5 Miata', 'Mazda', 35000, 2024, 'Pure driving pleasure.', '/assets/Mazda-MX-5-Miata.jpg'),
('Jaguar F-Type R', 'Jaguar', 105000, 2023, 'Beautiful design, brutal sound.', '/assets/Jaguar-F-Type-R.jpg'),
('Alfa Romeo Giulia QV', 'Alfa Romeo', 85000, 2023, 'Italian passion on four wheels.', '/assets/Alfa-Romeo-Giulia-QV.jpg'),
('Lotus Emira', 'Lotus', 95000, 2024, 'For the drivers.', '/assets/Lotus-Emira.jpg');