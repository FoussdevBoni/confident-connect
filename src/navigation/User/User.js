import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { Home, Profile } from "../../screens";
import { colors } from "../../data/colors";
import TabAppBar from "../../components/TabAppBar";
import { useRoute } from "@react-navigation/native";
import { userRoutes } from "../../data/routes";

const Tab = createBottomTabNavigator();

const User = ({user}) => {
   const components = [
   <Home user={user} />,
    null ,
    null,
   <Profile user={user}/>
  ]
  if (user) {
     return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          borderTopColor: 'transparent',  // Pour éviter les bordures grises par défaut
        },
        header: () => (
          <TabAppBar user={user}  />
        ),
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
          flex: 0,
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
      })}
    >
      {
        userRoutes.map((item, index) => {
          
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              initialParams={{ user: user }}

              options={{
                tabBarLabel: item.name,
                tabBarIcon: ({ color }) => {
                  if (item.iconType==='MaterialIcons') {
                    return (
                      <MaterialIcons name={item.icon} size={26} color={color} />
                    );
                  } else {
                    return (
                      <Ionicons name={item.icon} size={26} color={color} />
                    );
                  }
                },
              }}
            >
              {props => components[index]}


            </Tab.Screen>
          );
        })
      }
    </Tab.Navigator>
  );
  }
}

export default User;
