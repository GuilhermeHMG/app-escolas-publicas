import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useSchoolStore } from '../../src/store/useSchoolStore';

export default function CreateSchool() {
  const router = useRouter();
  const { addSchool } = useSchoolStore();

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleCreate = async () => {
    if (!nome || !endereco) return;
    await addSchool({ nome, endereco });
    router.push('/schools');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Nova Escola</Text>

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

      <Button title="Salvar" onPress={handleCreate} />
    </View>
  );
}
