import { create } from "zustand";
import { School, Class } from "../types";

type State = {
  schools: School[];
  classes: Class[];
  fetchSchools: () => Promise<void>;
  addSchool: (school: Partial<School>) => Promise<void>;
  updateSchool: (id: number, school: Partial<School>) => Promise<void>;
  deleteSchool: (id: number) => Promise<void>;
  fetchClasses: (schoolId: number) => Promise<void>;
  addClass: (classData: Partial<Class>) => Promise<void>;
  updateClass: (id: number, classData: Partial<Class>) => Promise<void>;
  deleteClass: (id: number) => Promise<void>;
};

export const useSchoolStore = create<State>((set, get) => ({
  schools: [],
  classes: [],

  fetchSchools: async () => {
    const res = await fetch("/api/schools");
    const data = await res.json();
    set({ schools: data });
  },

  addSchool: async (school) => {
    const res = await fetch("/api/schools", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(school),
    });

    const newSchool = await res.json();

    set((state) => ({
      schools: [...state.schools, newSchool],
    }));
  },

  updateSchool: async (id, school) => {
    await fetch(`/api/schools/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(school),
    });

    set((state) => ({
      schools: state.schools.map((s) =>
        s.id === id ? { ...s, ...school } : s,
      ),
    }));
  },

  deleteSchool: async (id) => {
    await fetch(`/api/schools/${id}`, {
      method: "DELETE",
    });

    set((state) => ({
      schools: state.schools.filter((s) => s.id !== id),
    }));
  },

  fetchClasses: async (schoolId) => {
    const res = await fetch(`/api/classes?schoolId=${schoolId}`);
    const data = await res.json();
    set({ classes: data });
  },

  addClass: async (classData) => {
    const res = await fetch("/api/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(classData),
    });

    const newClass = await res.json();

    set((state) => ({
      classes: [...state.classes, newClass],
    }));
  },

  updateClass: async (id, classData) => {
    await fetch(`/api/classes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(classData),
    });

    set((state) => ({
      classes: state.classes.map((c) =>
        c.id === id ? { ...c, ...classData } : c,
      ),
    }));
  },

  deleteClass: async (id) => {
    await fetch(`/api/classes/${id}`, {
      method: "DELETE",
    });

    set((state) => ({
      classes: state.classes.filter((c) => c.id !== id),
    }));
  },
}));
