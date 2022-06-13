import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { Text } from 'react-native';

import ProfessionalCard from '../../components/Cards/ProfessionalCard';
import Dialog from '../../components/Dialog';
import SearchBar from '../../components/SearchBar';
import Wrapper from '../../components/Wrapper';
import data from '../../mocks/professionals';
import {
  ContainerButtonsDialog,
  Content,
  List,
  PrimaryButton,
  PrimaryButtonTitle,
  SecondaryButton,
  SecondaryButtonTitle,
} from './styles';

const ListProfessionals = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [listProfessionals, setListProfessionals] = useState(data);
  const [isDialogVisible, setDialogVisible] = useState(false);

  const filteredListProfessionals = useMemo(() => {
    return listProfessionals.filter((item) =>
      item.nome.toUpperCase().includes(search.toUpperCase())
    );
  }, [listProfessionals, search]);

  return (
    <Wrapper>
      <Content>
        <List
          data={filteredListProfessionals}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProfessionalCard
              item={item}
              onPressDelete={() => setDialogVisible(true)}
              onPressEdit={() =>
                navigation.navigate('RegisterProfessional', {
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
            <PrimaryButton onPress={() => console.log('remover registro!')}>
              <PrimaryButtonTitle>Remover</PrimaryButtonTitle>
            </PrimaryButton>
          </ContainerButtonsDialog>
        </Dialog>
      </Content>
    </Wrapper>
  );
};

export default ListProfessionals;
