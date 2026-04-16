import { View, Text, Button, ScrollView } from "react-native";
import { useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSchoolStore } from "../../src/store/useSchoolStore";

export default function SchoolDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { schools, classes, fetchClasses, deleteClass } = useSchoolStore();

  const school = schools.find((s) => s.id === Number(id));

  useEffect(() => {
    if (id) {
      fetchClasses(Number(id));
    }
  }, [id]);

  if (!school) {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Escola não encontrada</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>{school.nome}</Text>
      <Text style={{ marginBottom: 24 }}>{school.endereco}</Text>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Turmas da escola</Text>

      {classes.map((c) => (
        <View
          key={c.id}
          style={{
            padding: 16,
            marginBottom: 12,
            backgroundColor: "#f7f7f7",
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{c.nome}</Text>
          <Text>Turno: {c.turno}</Text>
          <Text>Ano letivo: {c.anoLetivo}</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ marginRight: 8 }}>
              <Button
                title="Editar"
                onPress={() => router.push(`/classes/edit/${c.id}`)}
              />
            </View>
            <Button
              title="Excluir"
              color="red"
              onPress={() => deleteClass(c.id)}
            />
          </View>
        </View>
      ))}

      <Button
        title="Cadastrar nova turma"
        onPress={() => router.push(`/classes/create?schoolId=${id}`)}
      />
    </ScrollView>
  );
}
