import { View, Text, Button, ScrollView } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useSchoolStore } from "../../src/store/useSchoolStore";

export default function Schools() {
  const router = useRouter();
  const { schools, fetchSchools, deleteSchool } = useSchoolStore();

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Lista de Escolas</Text>

      {schools.map((s) => (
        <View
          key={s.id}
          style={{
            padding: 16,
            marginBottom: 8,
            backgroundColor: "#f0f0f0",
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{s.nome}</Text>
          <Text>{s.endereco}</Text>
          <Text>Número de turmas: {s.turmas?.length || 0}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Button
              title="Ver Turmas"
              onPress={() => router.push(`/schools/${s.id}`)}
            />
            <Button
              title="Editar"
              onPress={() => router.push(`/schools/edit/${s.id}`)}
            />
            <Button
              title="Excluir"
              color="red"
              onPress={() => deleteSchool(s.id)}
            />
          </View>
        </View>
      ))}

      <Button
        title="Nova Escola"
        onPress={() => router.push("/schools/create")}
      />
    </ScrollView>
  );
}
