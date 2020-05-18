import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import * as productActions from '../../store/actions/products';
import Product from '../../models/product';

const EditProductScreen = props => {
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => state.products.products.find(p => p.id === prodId));
    const dispatch = useDispatch();

    const [code, setCode] = useState(editedProduct ? editedProduct.code : '');
    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState(editedProduct ? editedProduct.price : '');
    const [quantity, setQuantity] = useState(editedProduct ? editedProduct.quantity : '');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');
    const [categoryId, setCategoryId] = useState(editedProduct ? editedProduct.categoryId : '');

    const submitHandler = useCallback(() => {
        const newProduct = new Product(prodId || null, code, title, imageUrl, +price, +quantity, description, +categoryId);
        if (editedProduct) {
            dispatch(productActions.updateProduct(newProduct));
        } else {
            dispatch(productActions.createProduct(newProduct));
        }
        props.navigation.goBack();
    }, [dispatch, title, code, imageUrl, price, quantity, description, categoryId]); 

    useEffect(() => {
        props.navigation.setParams({submit: submitHandler});
    }, [submitHandler]);

    return (
        <ScrollView>
            <View>
                <Text>Code</Text>
                <TextInput
                    value={code}
                    onChangeText={text => setCode(text)}
                />
            </View>
            <View>
                <Text>Title</Text>
                <TextInput
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
            </View>
            <View>
                <Text>Image url</Text>
                <TextInput
                    value={imageUrl}
                    onChangeText={text => setImageUrl(text)}
                />
            </View>
            <View>
                <Text>Price</Text>
                <TextInput
                    value={price.toString()}
                    onChangeText={text => setPrice(text)}
                />
            </View>
            <View>
                <Text>Quantity</Text>
                <TextInput
                    value={quantity.toString()}
                    onChangeText={text => setQuantity(text)}
                />
            </View>
            <View>
                <Text>Description</Text>
                <TextInput
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
            </View>
            <View>
                <Text>Category ID</Text>
                <TextInput
                    value={categoryId.toString()}
                    onChangeText={text => setCategoryId(text)}
                />
            </View>
        </ScrollView>
    );
};

EditProductScreen.navigationOptions = navData => {
    const submit = navData.navigation.getParam('submit');
    return {
        headerTitle: navData.navigation.getParam('productId')
          ? 'Edit Product'
          : 'Add Product',
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Save"
              iconName={
                Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
              }
              onPress={submit}
            />
          </HeaderButtons>
        )
      };
};

export default EditProductScreen;