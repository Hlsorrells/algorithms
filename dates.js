// This date format works for MySQL DATETIME format
new Date().toISOString().slice(0, 19).replace('T', ' ');