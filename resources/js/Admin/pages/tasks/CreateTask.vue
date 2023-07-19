<template> 
    <v-container>
        <v-form  ref="form"
         lazy-validation>
            <v-row>
                <v-col cols="12">
                    <p>TITULO</p>
                    <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <p>Estado</p>
                    <v-select
                        v-model="select"
                        :items="items"
                        label="Estado"
                        required
                        ></v-select>
                </v-col>
                <v-col cols="12" >
                    <p>Descripcion</p>
                    <v-textarea
                        v-model="description"
                        :rules="descriptionRules"
                        label="Descripcion"
                        required
                    ></v-textarea>
                </v-col>
                <v-col cols="12" >
                    <v-btn
                    @click="submit">
                        guardar
                    </v-btn>
                </v-col>
        
            </v-row>
        </v-form>
    </v-container>
</template>
<script>
    export default{
        data: () => ({
            name: '',
            description: '',
            select: null,
            id:0,
            nameRules: [v =>!!v || 'Name is required'],
            descriptionRules: [v =>!!v || 'la descripcion es necesaria'],
            selectRules: [v =>!!v || 'Item is required'],
            items: ['pendiente','Trabajando','Terminada']
        }),
        methods:{
            submit(){
                let valid =this.$refs.form.validate();
                if(valid){
                   let data = {
                        id: this.generateID(),
                        name: this.name,
                        description: this.description,
                        state: this.select,
                    }
                    let setdata = localStorage.getItem('DataTask')
                    if(setdata){
                        setdata = JSON.parse(setdata)
                    }else{
                        setdata = []
                    }
                    setdata.push(data)
                    localStorage.setItem("DataTask",JSON.stringify(setdata));
                    this.id = this.id+1
                }else
                {
                    console.log('todo mal')
                }
                
            },
            generateID(){
                return Math.random().toString(36).substr(2, 9); 
            }
        }
    }


</script>