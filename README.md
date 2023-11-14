

SQL Definitions

| Tables list     |                    |
| :-------------- | :----------------- |
| Billboard       | Category           |
| Color           | Image              |
| Order           | order_details      |
| order_items     | order_items_joined |
| OrderItem       | Product            |
| product_reviews | Size               |
| Store           | users              |

```
CREATE TABLE Billboard (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  storeId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  label varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  imageUrl varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updatedAt datetime(3) NOT NULL,
  PRIMARY KEY (id),
  KEY Billboard_storeId_idx (storeId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```


```
CREATE TABLE Category (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  storeId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  billboardId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  name varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updatedAt datetime(3) NOT NULL,
  PRIMARY KEY (id),
  KEY Category_storeId_idx (storeId),
  KEY Category_billboardId_idx (billboardId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```


```
CREATE TABLE Color (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  storeId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  name varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  value varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updatedAt datetime(3) NOT NULL,
  PRIMARY KEY (id),
  KEY Color_storeId_idx (storeId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```


```
CREATE TABLE Image (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  productId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  url varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updatedAt datetime(3) NOT NULL,
  PRIMARY KEY (id),
  KEY Image_productId_idx (productId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```



```
CREATE TABLE Order (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  storeId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  isPaid tinyint(1) NOT NULL DEFAULT '0',
  phone varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  address varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  createdAt datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated datetime(3) NOT NULL,
  PRIMARY KEY (id),
  KEY Order_storeId_idx (storeId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```



```
CREATE TABLE order_details (
  confirmation_id varchar(191) NOT NULL,
  order_time datetime(3) NOT NULL,
  total_items int NOT NULL,
  order_total decimal(65,30) NOT NULL,
  PRIMARY KEY (confirmation_id),
  KEY order_details_confirmation_id_idx (confirmation_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```



```
CREATE TABLE order_items (
  id int NOT NULL AUTO_INCREMENT,
  confirmation_id varchar(191) NOT NULL,
  name varchar(191) NOT NULL,
  price decimal(65,30) NOT NULL,
  size varchar(191) NOT NULL,
  color varchar(191) NOT NULL,
  category_name varchar(191) NOT NULL,
  PRIMARY KEY (id),
  KEY order_items_confirmation_id_idx (confirmation_id)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```



```
CREATE TABLE order_items_joined (
  id int NOT NULL AUTO_INCREMENT,
  confirmation_id varchar(191) NOT NULL,
  name varchar(191) NOT NULL,
  price decimal(65,30) NOT NULL,
  size varchar(191) NOT NULL,
  color varchar(191) NOT NULL,
  category_name varchar(191) NOT NULL,
  order_time datetime(3) NOT NULL,
  total_items int NOT NULL,
  order_total decimal(65,30) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```



```
CREATE TABLE OrderItem (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  orderId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  productId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (id),
  KEY OrderItem_orderId_idx (orderId),
  KEY OrderItem_productId_idx (productId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```



```
CREATE TABLE Product (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  storeId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  categoryId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  name varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  price decimal(65,30) NOT NULL,
  isFeatured tinyint(1) NOT NULL DEFAULT '0',
  isArchived tinyint(1) NOT NULL DEFAULT '0',
  sizeId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  colorId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updatedAt datetime(3) NOT NULL,
  PRIMARY KEY (id),
  KEY Product_storeId_idx (storeId),
  KEY Product_categoryId_idx (categoryId),
  KEY Product_sizeId_idx (sizeId),
  KEY Product_colorId_idx (colorId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```



```
CREATE TABLE product_reviews (
  id bigint unsigned NOT NULL AUTO_INCREMENT,
  product_id varchar(255) DEFAULT NULL,
  reviewer_name varchar(255) DEFAULT NULL,
  stars int DEFAULT NULL,
  review_text text,
  created_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY id (id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```



```
CREATE TABLE Size (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  storeId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  name varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  value varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updatedAt datetime(3) NOT NULL,
  PRIMARY KEY (id),
  KEY Size_storeId_idx (storeId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```



```
CREATE TABLE Store (
  id varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  name varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  userId varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  createdAt datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updatedAt datetime(3) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
```



```
CREATE TABLE users (
  id bigint unsigned NOT NULL AUTO_INCREMENT,
  first_name varchar(255) DEFAULT NULL,
  last_name varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  role varchar(50) NOT NULL,
  password varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY id (id),
  UNIQUE KEY email (email),
  CONSTRAINT users_chk_1 CHECK ((role in (_utf8mb4'ADMIN',_utf8mb4'USER')))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

|  |  |
| - | - |
