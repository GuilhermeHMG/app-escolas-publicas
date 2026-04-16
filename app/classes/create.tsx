import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSchoolStore } from "../../src/store/useSchoolStore";

export default function CreateClass() {
  const router = useRouter();
  const { schoolId } = useLocalSearchParams();
  const { addClass } = useSchoolStore();

  const [nome, setNome] = useState("");
  const [turno, setTurno] = useState("");
  const [anoLetivo, setAnoLetivo] = useState("");

  const handleCreate = async () => {
    if (!nome || !turno || !anoLetivo || !schoolId) return;
    await addClass({ nome, turno, anoLetivo, escolaId: Number(schoolId) });
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Nova Turma</Text>

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

      <Button title="Salvar" onPress={handleCreate} />
    </View>
  );
}
