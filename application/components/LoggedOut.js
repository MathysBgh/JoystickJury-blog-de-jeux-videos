import React from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

function LoggedOut() {
    const supabaseClient = useSupabaseClient();

    const onClickLogin = async () => {
        try {
            // Remplacez ceci par votre logique d'authentification, par exemple une redirection vers une page de connexion
            const { user, session, error } = await supabaseClient.auth.signIn({
                // Exemple avec un provider Google
                provider: 'google',
            });

            if (error) throw error;
            console.log(user, session);
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    return (
        <div>
            <button onClick={onClickLogin}>Se connecter (par défaut)</button>
        </div>
    );
}

export default LoggedOut;
