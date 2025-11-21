
db.alumnos.deleteOne({ nombre: "Ana" });
db.alumnos.deleteOne({ nombre: "Luis" });


db.eventos.deleteOne({ tipo: "Cultural" });
db.eventos.deleteOne({ tipo: "Deportivo" });


db.plantel.deleteOne({ edificio: "A" });
db.plantel.deleteOne({ edificio: "B" });


db.escuela.deleteOne({ nombre: "CBTIS 01" });
db.escuela.deleteOne({ nombre: "CONALEP 02" });


db.profesores.deleteOne({ nombre: "Carlos" });
db.profesores.deleteOne({ nombre: "Sofia" });