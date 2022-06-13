import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { Text } from 'react-native';

import ProfessionCard from '../../components/Cards/ProfessionCard';
import Dialog from '../../components/Dialog';
import SearchBar from '../../components/SearchBar';
import Wrapper from '../../components/Wrapper';
import data from '../../mocks/professions';
import {
  ContainerButtonsDialog,
  Content,
  List,
  PrimaryButton,
  PrimaryButtonTitle,
  SecondaryButton,
  SecondaryButtonTitle,
} from './styles';

const ListProfessions = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [listProfessions, setListProfessions] = useState(data);
  const [isDialogVisible, setDialogVisible] = useState(false);

  const filteredListProfessions = useMemo(() => {
    return listProfessions.filter((item) =>
      item.descricao.toUpperCase().includes(search.toUpperCase())
    );
  }, [listProfessions, search]);

  return (
    <Wrapper>
      <Content>
        <List
          data={filteredListProfessions}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProfessionCard
              item={item}
              onPressDelete={() => setDialogVisible(true)}
              onPressEdit={() =>
                navigation.navigate('RegisterProfession', {
                  initialValues: item,
                })
              }
            />
          )}
          ListHeaderComponent={
            <SearchBar
              value={search}
              onChangeText={setSearch}
              placeholder="Buscar por nome"
            />
          }
        />
        <Dialog visible={isDialogVisible}>
          <Text>Deseja remover o registro?</Text>
          <ContainerButtonsDialog>
            <SecondaryButton onPress={() => setDialogVisible(false)}>
              <SecondaryButtonTitle>Cancelar</SecondaryButtonTitle>
            </SecondaryButton>
            <PrimaryButton onPress={() => {}}>
              <PrimaryButtonTitle>Remover</PrimaryButtonTitle>
            </PrimaryButton>
          </ContainerButtonsDialog>
        </Dialog>
      </Content>
    </Wrapper>
  );
};

export default ListProfessions;
