const resList = [
  {
    "id": "r1",
    "name": "Sunset Grill",
    "picture": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    "rating": 4.6,
    "price": "$$",
    "delivery_time": "30-40 mins",
    "cuisine": "American"
  },
  {
    "id": "r2",
    "name": "Pasta Palace",
    "picture": "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80",
    "rating": 4.3,
    "price": "$$",
    "delivery_time": "25-35 mins",
    "cuisine": "Italian"
  },
  {
    "id": "r3",
    "name": "Sushi World",
    "picture": "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80",
    "rating": 4.8,
    "price": "$$$",
    "delivery_time": "40-50 mins",
    "cuisine": "Japanese"
  },
  {
    "id": "r4",
    "name": "Taco Fiesta",
    "picture": "https://imgs.search.brave.com/JwuCXHCYGRPpYDFhrwEx-ceSrxngS7JEYlZQJ-Wpzhw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iYWNr/eWFyZHRhY28uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAxL0JhY2t5YXJk/VGFjb19GaWVzdGFf/Q2F0ZXJpbmctMS5q/cGc",
    "rating": 4.2,
    "price": "$",
    "delivery_time": "20-30 mins",
    "cuisine": "Mexican"
  },
  {
    "id": "r5",
    "name": "Veggie Delight",
    "picture": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    "rating": 4.5,
    "price": "$",
    "delivery_time": "30-40 mins",
    "cuisine": "Vegetarian"
  },
  {
    "id": "r6",
    "name": "Burger Hub",
    "picture": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80",
    "rating": 4.1,
    "price": "$",
    "delivery_time": "15-25 mins",
    "cuisine": "American"
  },
  {
    "id": "r7",
    "name": "Curry Corner",
    "picture": "https://imgs.search.brave.com/ORE7XxHWvrSSrsJd9-6oyHDSNkf-J7kQnX6R0uvXGaA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2tpcHRoZWRpc2hl/cy5jb20vX25leHQv/aW1hZ2U_dXJsPWh0/dHBzOi8vbWVudS1p/bWFnZXMtc3RhdGlj/LnNraXB0aGVkaXNo/ZXMuY29tL2ltYWdl/cy9yZXNpemVkL2xh/cmdlLWM3MWE4NWI2/NjE3ZTg3NjI2OWEz/LmpwZyZ3PTM4NDAm/cT03NQ.jpeg",
    "rating": 4.7,
    "price": "$$",
    "delivery_time": "35-45 mins",
    "cuisine": "Indian"
  },
  {
    "id": "r8",
    "name": "Noodle Nest",
    "picture": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=400&q=80",
    "rating": 4.4,
    "price": "$",
    "delivery_time": "20-30 mins",
    "cuisine": "Chinese"
  },
  {
    "id": "r9",
    "name": "Mediterraneo",
    "picture": "https://imgs.search.brave.com/G11k7Ue8rCQEipmBfc4RhOV5c-LWXkvBQiqYkdiiGaU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlbWVkaXRlcnJh/bmVhbmRpc2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA0L09saXZlLU9p/bC1QYXN0LVJlY2lw/ZS1UaGUtTWVkaXRl/cnJhbmVhbi1EaXNo/LTMtMzE1eDMxNS5q/cGc",
    "rating": 4.6,
    "price": "$$",
    "delivery_time": "30-40 mins",
    "cuisine": "Mediterranean"
  },
  {
    "id": "r10",
    "name": "Pizza Planet",
    "picture": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    "rating": 4.3,
    "price": "$",
    "delivery_time": "25-35 mins",
    "cuisine": "Italian"
  },
  {
    "id": "r11",
    "name": "Seafood Shack",
    "picture": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    "rating": 4.7,
    "price": "$$$",
    "delivery_time": "40-50 mins",
    "cuisine": "Seafood"
  },
  {
    "id": "r12",
    "name": "BBQ Barn",
    "picture": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    "rating": 4.5,
    "price": "$$",
    "delivery_time": "30-40 mins",
    "cuisine": "Barbecue"
  },
  {
    "id": "r13",
    "name": "Sweet Tooth",
    "picture": "https://imgs.search.brave.com/TJQkB7yD5uetzI8EehVFgzCUI2estU7FO-a0YFTmvPc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90Yi1z/dGF0aWMudWJlci5j/b20vcHJvZC9pbWFn/ZS1wcm9jL3Byb2Nl/c3NlZF9pbWFnZXMv/YmE2NGY3ZGQ3ODRk/OGU2NjU0MjQ5ZmIx/MmI4MjI2NmEvOTdl/Zjc0NThkZGU2MmZh/OTE4NjM1YmMyMTI2/NWQ5ZjUuanBlZw",
    "rating": 4.8,
    "price": "$",
    "delivery_time": "15-25 mins",
    "cuisine": "Desserts"
  },
  {
    "id": "r14",
    "name": "Cafe Mocha",
    "picture": "https://imgs.search.brave.com/xp4GkK6yY7it0_x1OXcHV8ZwcHrOqkR5mJLpTFkw3ZM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vYmFraW5n/bWlzY2hpZWYuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzEyL2hvbWVtYWRl/LW1vY2hhLXBob3Rv/LmpwZw",
    "rating": 4.3,
    "price": "$",
    "delivery_time": "10-20 mins",
    "cuisine": "Cafe"
  },
  {
    "id": "r15",
    "name": "Bakery Bliss",
    "picture": "https://imgs.search.brave.com/_7Nl6GynnbPd6QTD6msJqlOmKJdn-pwvpZ56whwfNnE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUz/OGU0NGU2ZTRiMGVl/NDZkZmQ3YTg1Mi8x/NDAyMTQ5NjE0NzUz/LUdFVktXVDhCMERC/WUdXMEVOSUk4L0Jh/a2VyeTQuanBn",
    "rating": 4.6,
    "price": "$",
    "delivery_time": "20-30 mins",
    "cuisine": "Bakery"
  }
];

  export default resList