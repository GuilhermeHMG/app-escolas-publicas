import { View, Text, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSchoolStore } from "../../../src/store/useSchoolStore";

export default function EditClass() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { classes, updateClass } = useSchoolStore();

  const classItem = classes.find((c) => c.id === Number(id));

  const [nome, setNome] = useState(classItem?.nome || "");
  const [turno, setTurno] = useState(classItem?.turno || "");
  const [anoLetivo, setAnoLetivo] = useState(classItem?.anoLetivo || "");

  useEffect(() => {
    if (classItem) {
      setNome(classItem.nome);
      setTurno(classItem.turno);
      setAnoLetivo(classItem.anoLetivo);
    }
  }, [classItem]);

  const handleUpdate = async () => {
    if (!nome || !turno || !anoLetivo || !classItem) return;
    await updateClass(classItem.id, { nome, turno, anoLetivo });
    router.back();
  };

  if (!classItem) {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Turma não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Editar Turma</Text>

      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
        placeholder="Nome da Turma"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
        placeholder="Turno (manhã, tarde, noite)"
        value={turno}
        onChangeText={setTurno}
      />

      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
        placeholder="Ano Letivo"
        value={anoLetivo}
        onChangeText={setAnoLetivo}
      />

      <Button title="Salvar" onPress={handleUpdate} />
    </View>
  );
}
