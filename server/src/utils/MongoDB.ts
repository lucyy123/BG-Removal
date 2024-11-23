import mongoose from "mongoose"

export const ConnectDB = async (url: string) => {
    try {
        await mongoose.connect(url)
        console.log('MongoDB Connected')

    } catch (error) {
        console.log('error:', error)

    }
}