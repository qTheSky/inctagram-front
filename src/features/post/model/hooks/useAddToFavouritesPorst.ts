import { useMutation } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import { useSnackbar } from 'widgets/SnackBar/model/store/snackbarStore'
import { UsersService } from 'features/users/model/service/usersService'

export const useAddToFavouritesPost = (postId: string) => {
    const onOpen = useSnackbar((state) => state.onOpen)

    const { mutate: addToFavourites } = useMutation({
        mutationFn: () => UsersService.addToFavourites(postId),
        onSuccess: async () => {
        },
        onError: (error: AxiosError<{ message: string }>) => {
            onOpen(error.message, 'danger', 'left')
        }
    })
    return { addToFavourites }
}
