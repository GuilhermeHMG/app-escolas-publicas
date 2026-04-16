import { View, Text, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSchoolStore } from '../../../src/store/useSchoolStore';

export default function EditSchool() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { schools, updateSchool } = useSchoolStore();

  const school = schools.find((s) => s.id === Number(id));

  const [nome, setNome] = useState(school?.nome || '');
  const [endereco, setEndereco] = useState(school?.endereco || '');

  useEffect(() => {
    if (school) {
      setNome(school.nome);
      setEndereco(school.endereco);
    }
  }, [school]);

  const handleUpdate = async () => {
    if (!nome || !endereco || !school) return;
    await updateSchool(school.id, { nome, endereco });
    router.push('/schools');
  };

  if (!school) {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Escola não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Editar Escola</Text>

      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <Button title="Salvar" onPress={handleUpdate} />
    </View>
  );
}