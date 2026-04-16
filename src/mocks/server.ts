import { createServer } from "miragejs";

export function makeServer() {
  let schools: any[] = [];
  let classes: any[] = [];

  createServer({
    routes() {
      this.namespace = "api";

      this.get("/schools", () => {
        return schools.map((school) => ({
          ...school,
          turmas: classes.filter((c) => c.escolaId === school.id),
        }));
      });

      this.post("/schools", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        const newSchool = {
          id: Date.now(),
          ...data,
        };

        schools.push(newSchool);

        return newSchool;
      });

      this.put("/schools/:id", (schema, request) => {
        const id = Number(request.params.id);
        const data = JSON.parse(request.requestBody);

        const schoolIndex = schools.findIndex((s) => s.id === id);
        if (schoolIndex !== -1) {
          schools[schoolIndex] = { ...schools[schoolIndex], ...data };
          return schools[schoolIndex];
        }
        return {};
      });

      this.delete("/schools/:id", (schema, request) => {
        const id = Number(request.params.id);

        schools = schools.filter((s) => s.id !== id);

        return {};
      });

      this.get("/classes", (schema, request) => {
        const schoolId = request.queryParams.schoolId;
        if (schoolId) {
          return classes.filter((c) => c.escolaId === Number(schoolId));
        }
        return classes;
      });

      this.post("/classes", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        const newClass = {
          id: Date.now(),
          ...data,
        };

        classes.push(newClass);

        return newClass;
      });

      this.put("/classes/:id", (schema, request) => {
        const id = Number(request.params.id);
        const data = JSON.parse(request.requestBody);

        const classIndex = classes.findIndex((c) => c.id === id);
        if (classIndex !== -1) {
          classes[classIndex] = { ...classes[classIndex], ...data };
          return classes[classIndex];
        }
        return {};
      });

      this.delete("/classes/:id", (schema, request) => {
        const id = Number(request.params.id);

        classes = classes.filter((c) => c.id !== id);

        return {};
      });
    },
  });
}
