<template>
    <v-container fluid>
        <v-row align="start" no-gutters>
            <v-btn
                size="small"
                color="primary"
                dark
                link to="/"
                class="hidden-md-and-down my-4 mx-4"
                >
                <v-icon aria-hidden="false" small class="mr-2">mdi-arrow-left</v-icon>Kembali
            </v-btn>
        </v-row>

        <v-row>
            <v-col cols="8">
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <p class="text-h3 pb-2">Febri Wanda</p>
                                <p class="text-h6 px-1">Full Stack Engineer</p>
                                <p class="text-body-2 pb-2 px-1">Jakarta Selatan, Pesanggrahan, Indonesia</p>
                                <v-list max-width="400">
                                    <v-list-item
                                        v-for="(value, key) in information"
                                        :key="key"
                                        :value="value"
                                    >
                                        <template v-slot:prepend>
                                            <v-icon :icon="value.icon"></v-icon>
                                        </template>
                                        <v-list-item-title v-text="value.text"></v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                        </v-row>
                        <v-divider class="pb-6" />
                        <v-row class="pb-6">
                            <v-col>
                                <p class="text-h4 pb-2">Summary</p>
                                <p class="text-body-1">
                                    Full stack web developer with more than 3 years of experience with various projects, all projects are mostly web applications.
                                    Passionate about programming and enthusiastic with the latest technology
                                </p>
                            </v-col>
                        </v-row>
                        <v-divider class="pb-6" />
                        <v-row>
                            <v-col>
                                <p class="text-h4 pb-2">Work Experience</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <p class="text-h6 pb-2">Full Stack Engineer</p>
                                <p class="text-body-1 pb-2">Universitas Budi Luhur, Jakarta Selatan</p>
                                <p class="text-body-2 pb-2">Directorate Information Technology</p>
                                <ul class="px-8 pb-6">
                                    <li>Develop a visitor ticketing system for the campus finance department to serve more than 300 visitors per day</li>
                                    <li>Develop class schedule board display system used to display, approximately 270 classes schedules to a thousand of students every day</li>
                                    <li>Improving online registration web application, working on the team taking part on the module</li>
                                    <li>Develop an inventory management system that can be used by campus residents such as student, lecturers and staff, and public</li>
                                    <li>Develop applications to facilitate university cooperation proposals with domestic and overseas</li>
                                    <li>And many more information system applications for internal or public</li>
                                </ul>
                            </v-col>
                            <v-col cols="3" class="text-h6 text-end">August 2019 - Present</v-col>
                        </v-row>
                        <v-divider class="pb-6" />
                        <v-row class="pb-6">
                            <v-col>
                                <p class="text-h4 pb-2">Education</p>
                                <p class="text-body-1 font-weight-bold">Universitas Budi Luhur, Jakarta Selatan</p>
                                <p class="text-body-1">Bachelor of Engineering - Computer Science</p>
                                <p class="text-body-2 font-weight-thin">August 2019 - September 2021</p><br>
                                <p class="text-body-1">GPA: 3.44</p>
                                <p class="text-body-1">started working in third year on campus as an IT Staff at Universitas Budi Luhur. Besides my studies at college,
                                    While in college, I also participated in volunteer activities,
                                    Working in a team as a member consisting of 10 people. Culture Exchange,
                                    Providing assistance for exchange students from Meiji University on a daily basis and collaborating together doing social services
                                </p>
                            </v-col>
                        </v-row>
                        <v-divider class="pb-6" />
                        <v-row class="pb-6">
                            <v-col>
                                <p class="text-h4 pb-2">Skills & Other</p>
                                <v-row no-gutters>
                                    <v-col
                                        class="py-5"
                                        cols="2"
                                        v-for="image in images"
                                    >
                                        <v-img
                                            :width="200"
                                            aspect-ratio="4/3"
                                            cover
                                            :src="image"
                                        />
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>
<script>
import vue from '../assets/vue.png'
import ci from '../assets/codeigniter.png'
import laravel from '../assets/laravel.png'
import javascript from '../assets/javascript.png'
import jquery from '../assets/jquery.png'
import sql from '../assets/sql.png'
import oracle from '../assets/oracle.png'
import mysql from '../assets/mysql.png'
import sass from '../assets/sass.png'
import bootstrap from '../assets/bootstrap.png'
import git from '../assets/git.png'

export default {
    data: () => {
        return {
            information: [
                { text: 'febriwanda26@gmail.com', icon: 'mdi-email'},
                { text: 'linkedin.com/febri-wanda', icon: 'mdi-linkedin'}
            ],
            images: [ vue,ci,laravel,javascript,jquery,sql,oracle,mysql,sass,bootstrap,git ]
        }
    }
}
</script>