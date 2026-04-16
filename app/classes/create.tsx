import { View, Text, TextInput, Button, Picker } from "react-native";
import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSchoolStore } from "../../src/store/useSchoolStore";

export default function CreateClass() {
  const router = useRouter();
  const { schoolId } = useLocalSearchParams();
  const { addClass } = useSchoolStore();

  const [nome, setNome] = useState("");
  const [turno, setTurno] = useState("Manhã");
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

      <Picker
        selectedValue={turno}
        onValueChange={setTurno}
        style={{ marginBottom: 16 }}
      >
        <Picker.Item label="Manhã" value="Manhã" />
        <Picker.Item label="Tarde" value="Tarde" />
        <Picker.Item label="Noite" value="Noite" />
      </Picker>

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
